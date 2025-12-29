export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Basic XSS prevention
    .slice(0, 5000); // Limit length
}

export function validateContactForm(data: {
  name: string;
  email: string;
  message: string;
}): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.message || data.message.length < 20) {
    errors.message = 'Message must be at least 20 characters';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
