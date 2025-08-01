# CRM Automation Flow

Automating tasks frees up your time and ensures leads never fall through the cracks. This document outlines an example automation workflow using Notion and Zapier (or Make). Adjust to suit your tools and processes.

## Tools Required
- **Notion:** Serves as your CRM database.  
- **Zapier or Make:** Handles automation and integration between your website, email service and Notion.  
- **Email Service:** Use MailerLite, Mailchimp or SendGrid for sending sequences.  
- **Form Tool:** Typeform, Tally or any form builder used on your website.

## Workflow Steps
1. **Lead Capture:** Visitor submits the contact or opt‑in form on your website. The form collects Name, Email, Company and Message.  
2. **Zapier Trigger:** A trigger is set in Zapier for new form submissions. The data is sent to Notion to create a new entry in the CRM database with Lead Stage set to “New” and Source set to “Website.”  
3. **Tag & Segment:** Based on the form’s tag or user selection (e.g., industry or interest), assign a tag in Notion and add the lead to the relevant email segment.  
4. **Send Welcome Email:** Trigger an email via your email service thanking the lead for reaching out and providing the promised resource (e.g., free guide).  
5. **Assign Owner:** Automatically set the Owner property in Notion to a default team member or distribute leads in a round‑robin fashion.  
6. **Follow‑Up Reminder:** Create a Next Follow‑Up date three days from the capture date. Use Zapier to send a Slack or email reminder to the Owner when the date arrives.  
7. **Lead Stage Update:** When the Owner changes Lead Stage in Notion to “Qualified,” trigger another email sequence offering a demo or consultation. If the lead doesn’t respond after a set period, move them to a “Dormant” or “Unresponsive” stage and schedule re‑engagement.  
8. **Closed or Won:** When a lead converts to a customer, update their stage to “Customer.” Use this event to trigger onboarding emails and update any payment systems.  

## Re‑Engagement Triggers
- **Inactive Leads:** Leads in “New” or “Qualified” stage with no activity for 30 days. Send a check‑in email with new tips or features.  
- **Content Updates:** When you publish a new guide or feature, use a broadcast to inform leads and encourage engagement.  
- **Renewal Reminders:** For subscription customers, send renewal notices 30 days before expiration.

## Best Practices
- Test each Zapier automation step with sample data before going live.  
- Use naming conventions for Zaps (e.g., “Lead Capture to Notion”) to stay organised.  
- Monitor error logs; set up alerts if a Zap fails.  
- Periodically audit your automations to ensure they align with your evolving process.
