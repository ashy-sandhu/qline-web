
import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] pt-32 pb-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 text-[var(--primary-teal)]">
                    Privacy Policy
                </h1>

                <div className="prose prose-lg max-w-none space-y-8 text-[var(--text-muted)] font-light leading-relaxed">
                    <p className="text-xl text-[var(--text-main)] font-normal">
                        At Q-Line POS, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--primary-teal-dark)] mb-4 tracking-wide">1. Information We Collect</h2>
                        <p className="mb-4">
                            When you visit the specific sections of our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[var(--primary-teal)]">
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, State, Province, ZIP/Postal code, City</li>
                            <li>Cookies and Usage Data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--primary-teal-dark)] mb-4 tracking-wide">2. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the information we collect in various ways, including to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-[var(--primary-teal)]">
                            <li>Provide, operate, and maintain our website and software.</li>
                            <li>Improve, personalize, and expand our website and software.</li>
                            <li>Understand and analyze how you use our website and software.</li>
                            <li>Develop new products, services, features, and functionality.</li>
                            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                            <li>Send you emails.</li>
                            <li>Find and prevent fraud.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--primary-teal-dark)] mb-4 tracking-wide">3. License Activation Data</h2>
                        <p>
                            When you activate a Q-Line POS license, we collect specific hardware identifiers to bind the software license to your device. This ensures the security and validity of your software copy. This data is used solely for license verification and fraud prevention. we share this data with our internal servers to ensure your copy of the software is legitimate.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--primary-teal-dark)] mb-4 tracking-wide">4. Data Security</h2>
                        <p>
                            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--primary-teal-dark)] mb-4 tracking-wide">5. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[var(--primary-teal-dark)] mb-4 tracking-wide">6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <ul className="list-none pl-0 space-y-2 mt-4 text-[var(--primary-teal)] font-medium">
                            <li>By email: info@qline.com</li>
                            <li>By visiting this page on our website: /contact</li>
                            <li>By phone number: +92 (339) 933-9918</li>
                        </ul>
                    </section>

                    <p className="text-sm text-[var(--text-muted)] mt-12 pt-8 border-t border-black/10">
                        Last updated: February 2026
                    </p>
                </div>
            </div>
        </main>
    );
}
