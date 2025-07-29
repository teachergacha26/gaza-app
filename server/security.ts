import type { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

// Military-grade security middleware
export class SecurityManager {
  // IP masking and anonymization
  public static maskIP(ip: string): string {
    // Create a hash of the IP for privacy while maintaining uniqueness
    const hash = crypto.createHash('sha256');
    hash.update(ip + process.env.IP_SALT || 'default_salt_gaza_relief');
    return hash.digest('hex').substring(0, 8);
  }

  // Rate limiting per masked IP
  private static rateLimitMap = new Map<string, { count: number; resetTime: number }>();
  
  public static rateLimitMiddleware(maxRequests: number = 1000, windowMs: number = 15 * 60 * 1000) {
    return (req: Request, res: Response, next: NextFunction) => {
      const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
      const maskedIP = SecurityManager.maskIP(clientIP);
      const now = Date.now();
      
      const userRecord = SecurityManager.rateLimitMap.get(maskedIP);
      
      if (!userRecord || now > userRecord.resetTime) {
        SecurityManager.rateLimitMap.set(maskedIP, {
          count: 1,
          resetTime: now + windowMs
        });
        return next();
      }
      
      if (userRecord.count >= maxRequests) {
        return res.status(429).json({
          error: 'Too many requests',
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: Math.ceil((userRecord.resetTime - now) / 1000)
        });
      }
      
      userRecord.count++;
      next();
    };
  }

  // Enhanced security headers
  public static securityHeadersMiddleware(req: Request, res: Response, next: NextFunction) {
    // HTTPS enforcement
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    
    // Content Security Policy - Military grade
    res.setHeader('Content-Security-Policy', [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://replit.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https: wss:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; '));
    
    // Anti-clickjacking
    res.setHeader('X-Frame-Options', 'DENY');
    
    // XSS Protection
    res.setHeader('X-XSS-Protection', '1; mode=block');
    
    // Content type sniffing protection
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Referrer Policy for privacy
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Remove server information
    res.removeHeader('X-Powered-By');
    res.setHeader('Server', 'Gaza-Relief-Secure');
    
    // Permissions Policy (formerly Feature Policy)
    res.setHeader('Permissions-Policy', [
      'geolocation=()',
      'camera=()',
      'microphone=()',
      'payment=()',
      'usb=()',
      'magnetometer=()'
    ].join(', '));
    
    next();
  }

  // Input sanitization and validation
  public static sanitizeInput(input: any): any {
    if (typeof input === 'string') {
      // Remove potentially dangerous characters
      return input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .trim();
    }
    
    if (Array.isArray(input)) {
      return input.map(item => SecurityManager.sanitizeInput(item));
    }
    
    if (typeof input === 'object' && input !== null) {
      const sanitized: any = {};
      for (const [key, value] of Object.entries(input)) {
        sanitized[SecurityManager.sanitizeInput(key)] = SecurityManager.sanitizeInput(value);
      }
      return sanitized;
    }
    
    return input;
  }

  // Request logging with anonymized IPs
  public static requestLoggerMiddleware(req: Request, res: Response, next: NextFunction) {
    const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
    const maskedIP = SecurityManager.maskIP(clientIP);
    const timestamp = new Date().toISOString();
    
    // Enhanced logging without exposing real IPs
    console.log(`[${timestamp}] ${req.method} ${req.path} - Masked IP: ${maskedIP} - User-Agent: ${req.get('User-Agent')?.substring(0, 50)}...`);
    
    // Monitor for suspicious activity
    if (req.path.includes('..') || req.path.includes('etc/passwd') || req.query.toString().includes('<script')) {
      console.warn(`[SECURITY ALERT] Suspicious request from ${maskedIP}: ${req.method} ${req.path}`);
    }
    
    next();
  }

  // CORS configuration for production security
  public static corsMiddleware(req: Request, res: Response, next: NextFunction) {
    const allowedOrigins = [
      'https://your-domain.vercel.app',
      'https://your-custom-domain.com',
      ...(process.env.NODE_ENV === 'development' ? ['http://localhost:5000', 'http://localhost:3000'] : [])
    ];
    
    const origin = req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours
    
    if (req.method === 'OPTIONS') {
      return res.status(204).end();
    }
    
    next();
  }

  // Anti-bot protection
  public static antiBotMiddleware(req: Request, res: Response, next: NextFunction) {
    const userAgent = req.get('User-Agent') || '';
    const suspiciousBots = [
      /bot/i, /crawl/i, /spider/i, /scrape/i,
      /curl/i, /wget/i, /http/i, /python/i
    ];
    
    // Allow legitimate bots but block suspicious ones
    const isLegitimateBot = /googlebot|bingbot|facebookexternalhit/i.test(userAgent);
    const isSuspiciousBot = suspiciousBots.some(pattern => pattern.test(userAgent));
    
    if (isSuspiciousBot && !isLegitimateBot) {
      const maskedIP = SecurityManager.maskIP(req.ip || 'unknown');
      console.warn(`[SECURITY] Blocked suspicious bot from ${maskedIP}: ${userAgent}`);
      return res.status(403).json({ 
        error: 'Access denied',
        message: 'Automated requests are not permitted.' 
      });
    }
    
    next();
  }
}