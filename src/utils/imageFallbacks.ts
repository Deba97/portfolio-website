/**
 * This file contains fallback content for images that may not be available
 */

export const employeePortalDescriptions = {
  login: `The login screen provides secure authentication for employees and administrators. 
  Features email/password login, password recovery options, and a "Remember me" function.
  Designed with a clean interface featuring the company logo and branding.`,
  
  dashboard: `The administrator dashboard shows key metrics at a glance:
  - Total employee count with monthly growth
  - Active documents in the system
  - Pending approvals with urgency indicators
  - Expiring documents with timeline alerts
  - Document compliance by category (medical licenses, certifications, etc.)
  - Recent alerts and notifications`,
  
  employeeDirectory: `The employee directory provides a comprehensive view of all staff:
  - Searchable database with filters for department and status
  - At-a-glance status indicators (Active, Inactive, On Leave)
  - Pagination for large employee lists
  - Quick-access to employee details and actions
  - Department and role information`,
  
  documentManagement: `The document management system tracks all employee credentials:
  - Overview of pending reviews, expiring documents, and approved documents
  - Document library with filtering by category (certifications, licenses, training)
  - Status indicators for document approval state
  - Expiration alerts and compliance tracking
  - One-click access to download documents`,
  
  notifications: `The notification system keeps administrators informed:
  - Critical document alerts for expiring certifications
  - New employee onboarding notifications
  - Monthly compliance reporting
  - Color-coded urgency indicators
  - Options to mark as reviewed or send reminders`,
  
  settings: `The settings page allows users to manage their profile:
  - Personal information management (name, email, phone)
  - Profile photo customization
  - Job title and department information
  - Email notification preferences
  - Account security settings`
};

export function getImageFallback(imageType: string): string {
  switch (imageType) {
    case 'login':
      return employeePortalDescriptions.login;
    case 'dashboard':
      return employeePortalDescriptions.dashboard;
    case 'employee-directory':
      return employeePortalDescriptions.employeeDirectory;
    case 'document-management':
      return employeePortalDescriptions.documentManagement;
    case 'notifications':
      return employeePortalDescriptions.notifications;
    case 'settings':
      return employeePortalDescriptions.settings;
    default:
      return 'Detailed image description not available';
  }
} 