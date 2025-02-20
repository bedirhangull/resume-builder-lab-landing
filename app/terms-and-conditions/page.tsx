/* eslint-disable react/no-unescaped-entities */
import { Navbar } from "@/components/ui/navbar"
import Footer10 from "@/layouts/landing/footer"
import Link from "next/link"

export default function TermsAndConditions() {
    return (
        <div className="flex-grow container mx-auto px-4 pt-16">
            <Navbar />
            <div className="min-h-screen bg-white">
                <div className="container mx-auto px-4 py-8 md:py-12">
                    <div className="prose max-w-none">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">TERMS AND CONDITIONS</h1>

                        <p className="text-gray-600">Last updated February 18, 2025</p>

                        <h2 className="text-2xl font-bold mt-8">AGREEMENT TO OUR LEGAL TERMS</h2>

                        <p className="text-gray-600">
                            We are Resume Builder Lab ('Company', 'we', 'us', or 'our'). We operate the website
                            https://www.resumebuilderlab.com (the 'Site'), as well as any other related products and services that refer
                            or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').
                        </p>

                        <p className="text-gray-600">
                            You can contact us by email at info@resumebuilderlab.com or by mail to __________, __________, United
                            States.
                        </p>

                        <div className="my-8">
                            <h2 className="text-2xl font-bold mb-4">TABLE OF CONTENTS</h2>
                            <nav className="space-y-1">
                                {[
                                    "1. OUR SERVICES",
                                    "2. INTELLECTUAL PROPERTY RIGHTS",
                                    "3. USER REPRESENTATIONS",
                                    "4. USER REGISTRATION",
                                    "5. PURCHASES AND PAYMENT",
                                    "6. SUBSCRIPTIONS",
                                    "7. PROHIBITED ACTIVITIES",
                                    "8. USER GENERATED CONTRIBUTIONS",
                                    "9. CONTRIBUTION LICENSE",
                                    "10. SERVICES MANAGEMENT",
                                    "11. PRIVACY POLICY",
                                    "12. TERM AND TERMINATION",
                                    "13. MODIFICATIONS AND INTERRUPTIONS",
                                    "14. GOVERNING LAW",
                                    "15. DISPUTE RESOLUTION",
                                    "16. CORRECTIONS",
                                    "17. DISCLAIMER",
                                    "18. LIMITATIONS OF LIABILITY",
                                    "19. INDEMNIFICATION",
                                    "20. USER DATA",
                                    "21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
                                    "22. CALIFORNIA USERS AND RESIDENTS",
                                    "23. MISCELLANEOUS",
                                    "24. CONTACT US",
                                ].map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.split(". ")[1].toLowerCase().replace(/ /g, "-")}`}
                                        className="block text-blue-600 hover:underline"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <section id="our-services" className="mt-8">
                            <h2 className="text-2xl font-bold">1. OUR SERVICES</h2>
                            <p className="mt-4 text-gray-600">
                                The information provided when using the Services is not intended for distribution to or use by any person
                                or entity in any jurisdiction or country where such distribution or use would be contrary to law or
                                regulation or which would subject us to any registration requirement within such jurisdiction or country.
                            </p>
                            <p className="mt-4 text-gray-600">
                                The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability
                                and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your
                                interactions would be subjected to such laws, you may not use the Services. You may not use the Services
                                in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
                            </p>
                        </section>

                        <section id="intellectual-property-rights" className="mt-8">
                            <h2 className="text-2xl font-bold">2. INTELLECTUAL PROPERTY RIGHTS</h2>
                            <h3 className="text-xl font-bold mt-4">Our intellectual property</h3>
                            <p className="mt-4 text-gray-600">
                                We are the owner or the licensee of all intellectual property rights in our Services, including all source
                                code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics
                                in the Services (collectively, the 'Content'), as well as the trademarks, service marks, and logos
                                contained therein (the 'Marks').
                            </p>
                            <p className="mt-4 text-gray-600">
                                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual
                                property rights and unfair competition laws) and treaties in the United States and around the world.
                            </p>
                        </section>

                        <section id="user-representations" className="mt-8">
                            <h2 className="text-2xl font-bold">3. USER REPRESENTATIONS</h2>
                            <p className="mt-4 text-gray-600">
                                By using the Services, you represent and warrant that: (1) all registration information you submit will be
                                true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly
                                update such registration information as necessary; (3) you have the legal capacity and you agree to comply
                                with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not
                                access the Services through automated or non-human means; (6) you will not use the Services for any
                                illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or
                                regulation.
                            </p>
                        </section>

                        <section id="user-registration" className="mt-8">
                            <h2 className="text-2xl font-bold">4. USER REGISTRATION</h2>
                            <p className="mt-4 text-gray-600">
                                You may be required to register to use the Services. You agree to keep your password confidential and will
                                be responsible for all use of your account and password. We reserve the right to remove, reclaim, or
                                change a username you select if we determine, in our sole discretion, that such username is inappropriate,
                                obscene, or otherwise objectionable.
                            </p>
                        </section>

                        <section id="purchases-and-payment" className="mt-8">
                            <h2 className="text-2xl font-bold">5. PURCHASES AND PAYMENT</h2>
                            <p className="mt-4 text-gray-600">We accept the following forms of payment:</p>
                            <ul className="list-disc pl-8 mt-4 text-gray-600">
                                <li>Visa</li>
                                <li>American Express</li>
                                <li>Mastercard</li>
                                <li>Discover</li>
                                <li>PayPal</li>
                            </ul>
                            <p className="mt-4 text-gray-600">
                                You agree to provide current, complete, and accurate purchase and account information for all purchases
                                made via the Services. You further agree to promptly update account and payment information, including
                                email address, payment method, and payment card expiration date, so that we can complete your transactions
                                and contact you as needed.
                            </p>
                        </section>

                        <section id="subscriptions" className="mt-8">
                            <h2 className="text-2xl font-bold">6. SUBSCRIPTIONS</h2>
                            <h3 className="text-xl font-bold mt-4">Billing and Renewal</h3>
                            <p className="mt-4 text-gray-600">
                                Your subscription will continue and automatically renew unless cancelled. You consent to our charging your
                                payment method on a recurring basis without requiring your prior approval for each recurring charge, until
                                such time as you cancel the applicable order. The length of your billing cycle will depend on the type of
                                subscription plan you choose when you subscribed to the Services.
                            </p>

                            <h3 className="text-xl font-bold mt-4">Free Trial</h3>
                            <p className="mt-4 text-gray-600">
                                We offer a 7-day free trial to new users who register with the Services. The account will be charged
                                according to the user's chosen subscription at the end of the free trial.
                            </p>

                            <h3 className="text-xl font-bold mt-4">Cancellation</h3>
                            <p className="mt-4 text-gray-600">
                                You can cancel your subscription at any time by logging into your account. Your cancellation will take
                                effect at the end of the current paid term. If you have any questions or are unsatisfied with our
                                Services, please email us at info@resumebuilderlab.com.
                            </p>
                        </section>

                        <section id="prohibited-activities" className="mt-8">
                            <h2 className="text-2xl font-bold">7. PROHIBITED ACTIVITIES</h2>
                            <p className="mt-4 text-gray-600">
                                You may not access or use the Services for any purpose other than that for which we make the Services
                                available. The Services may not be used in connection with any commercial endeavors except those that are
                                specifically endorsed or approved by us.
                            </p>
                            <p className="mt-4 text-gray-600">As a user of the Services, you agree not to:</p>
                            <ul className="list-disc pl-8 mt-4 text-gray-600">
                                <li>
                                    Systematically retrieve data or other content from the Services to create or compile, directly or
                                    indirectly, a collection, compilation, database, or directory without written permission from us.
                                </li>
                                <li>
                                    Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account
                                    information such as user passwords.
                                </li>
                                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
                                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                                <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                                <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                                <li>Engage in unauthorized framing of or linking to the Services.</li>
                                <li>
                                    Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material that
                                    interferes with any party's uninterrupted use and enjoyment of the Services.
                                </li>
                                <li>Engage in any automated use of the system, such as using scripts to send comments or messages.</li>
                                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                                <li>
                                    Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active
                                    information collection or transmission mechanism.
                                </li>
                                <li>
                                    Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected
                                    to the Services.
                                </li>
                                <li>
                                    Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion
                                    of the Services to you.
                                </li>
                                <li>
                                    Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services,
                                    or any portion of the Services.
                                </li>
                            </ul>
                        </section>

                        <section id="user-generated-contributions" className="mt-8">
                            <h2 className="text-2xl font-bold">8. USER GENERATED CONTRIBUTIONS</h2>
                            <p className="mt-4 text-gray-600">The Services does not offer users to submit or post content.</p>
                        </section>

                        <section id="contribution-license" className="mt-8">
                            <h2 className="text-2xl font-bold">9. CONTRIBUTION LICENSE</h2>
                            <p className="mt-4 text-gray-600">
                                You and Services agree that we may access, store, process, and use any information and personal data that
                                you provide following the terms of the Privacy Policy and your choices (including settings).
                            </p>
                            <p className="mt-4 text-gray-600">
                                By submitting suggestions or other feedback regarding the Services, you agree that we can use and share
                                such feedback for any purpose without compensation to you.
                            </p>
                        </section>

                        <section id="services-management" className="mt-8">
                            <h2 className="text-2xl font-bold">10. SERVICES MANAGEMENT</h2>
                            <p className="mt-4 text-gray-600">
                                We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal
                                Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or
                                these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3)
                                in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or
                                disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in
                                our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise
                                disable all files and content that are excessive in size or are in any way burdensome to our systems; and
                                (5) otherwise manage the Services in a manner designed to protect our rights and property and to
                                facilitate the proper functioning of the Services.
                            </p>
                        </section>

                        <section id="privacy-policy" className="mt-8">
                            <h2 className="text-2xl font-bold">11. PRIVACY POLICY</h2>
                            <p className="mt-4 text-gray-600">
                                We care about data privacy and security. Please review our Privacy Policy:{" "}
                                <Link href="https://www.resumebuilderlab.com/privacy-policy" className="text-blue-600 hover:underline">
                                    https://www.resumebuilderlab.com/privacy-policy
                                </Link>
                                . By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these
                                Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services
                                from any other region of the world with laws or other requirements governing personal data collection,
                                use, or disclosure that differ from applicable laws in the United States, then through your continued use
                                of the Services, you are transferring your data to the United States, and you expressly consent to have
                                your data transferred to and processed in the United States.
                            </p>
                        </section>

                        <section id="term-and-termination" className="mt-8">
                            <h2 className="text-2xl font-bold">12. TERM AND TERMINATION</h2>
                            <p className="mt-4 text-gray-600">
                                These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY
                                OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE
                                OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY
                                PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
                                WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
                                TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION
                                THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                            </p>
                        </section>

                        <section id="modifications-and-interruptions" className="mt-8">
                            <h2 className="text-2xl font-bold">13. MODIFICATIONS AND INTERRUPTIONS</h2>
                            <p className="mt-4 text-gray-600">
                                We reserve the right to change, modify, or remove the contents of the Services at any time or for any
                                reason at our sole discretion without notice. We will not be liable to you or any third party for any
                                modification, price change, suspension, or discontinuance of the Services.
                            </p>
                            <p className="mt-4 text-gray-600">
                                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or
                                other problems or need to perform maintenance related to the Services, resulting in interruptions, delays,
                                or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the
                                Services at any time or for any reason without notice to you.
                            </p>
                        </section>

                        <section id="governing-law" className="mt-8">
                            <h2 className="text-2xl font-bold">14. GOVERNING LAW</h2>
                            <p className="mt-4 text-gray-600">
                                These Legal Terms and your use of the Services are governed by and construed in accordance with the laws
                                of the State of California applicable to agreements made and to be entirely performed within the State of
                                California, without regard to its conflict of law principles.
                            </p>
                        </section>

                        <section id="dispute-resolution" className="mt-8">
                            <h2 className="text-2xl font-bold">15. DISPUTE RESOLUTION</h2>
                            <h3 className="text-xl font-bold mt-4">Informal Negotiations</h3>
                            <p className="mt-4 text-gray-600">
                                To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal
                                Terms (each a 'Dispute' and collectively, the 'Disputes') brought by either you or us (individually, a
                                'Party' and collectively, the 'Parties'), the Parties agree to first attempt to negotiate any Dispute
                                (except those Disputes expressly provided below) informally for at least thirty (30) days before
                                initiating arbitration.
                            </p>

                            <h3 className="text-xl font-bold mt-4">Binding Arbitration</h3>
                            <p className="mt-4 text-gray-600">
                                If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those
                                Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU
                                UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
                            </p>
                        </section>

                        <section id="corrections" className="mt-8">
                            <h2 className="text-2xl font-bold">16. CORRECTIONS</h2>
                            <p className="mt-4 text-gray-600">
                                There may be information on the Services that contains typographical errors, inaccuracies, or omissions,
                                including descriptions, pricing, availability, and various other information. We reserve the right to
                                correct any errors, inaccuracies, or omissions and to change or update the information on the Services at
                                any time, without prior notice.
                            </p>
                        </section>

                        <section id="disclaimer" className="mt-8">
                            <h2 className="text-2xl font-bold">17. DISCLAIMER</h2>
                            <p className="mt-4 text-gray-600">
                                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL
                                BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                                IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.
                            </p>
                        </section>

                        <section id="limitations-of-liability" className="mt-8">
                            <h2 className="text-2xl font-bold">18. LIMITATIONS OF LIABILITY</h2>
                            <p className="mt-4 text-gray-600">
                                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
                                DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
                                PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
                                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                            </p>
                        </section>

                        <section id="indemnification" className="mt-8">
                            <h2 className="text-2xl font-bold">19. INDEMNIFICATION</h2>
                            <p className="mt-4 text-gray-600">
                                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of
                                our respective officers, agents, partners, and employees, from and against any loss, damage, liability,
                                claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or
                                arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your
                                representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third
                                party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any
                                other user of the Services with whom you connected via the Services.
                            </p>
                        </section>

                        <section id="user-data" className="mt-8">
                            <h2 className="text-2xl font-bold">20. USER DATA</h2>
                            <p className="mt-4 text-gray-600">
                                We will maintain certain data that you transmit to the Services for the purpose of managing the
                                performance of the Services, as well as data relating to your use of the Services. Although we perform
                                regular routine backups of data, you are solely responsible for all data that you transmit or that relates
                                to any activity you have undertaken using the Services.
                            </p>
                        </section>

                        <section id="electronic-communications" className="mt-8">
                            <h2 className="text-2xl font-bold">21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
                            <p className="mt-4 text-gray-600">
                                Visiting the Services, sending us emails, and completing online forms constitute electronic
                                communications. You consent to receive electronic communications, and you agree that all agreements,
                                notices, disclosures, and other communications we provide to you electronically, via email and on the
                                Services, satisfy any legal requirement that such communication be in writing.
                            </p>
                        </section>

                        <section id="california-users" className="mt-8">
                            <h2 className="text-2xl font-bold">22. CALIFORNIA USERS AND RESIDENTS</h2>
                            <p className="mt-4 text-gray-600">
                                If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of
                                the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625
                                North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916)
                                445-1254.
                            </p>
                        </section>

                        <section id="miscellaneous" className="mt-8">
                            <h2 className="text-2xl font-bold">23. MISCELLANEOUS</h2>
                            <p className="mt-4 text-gray-600">
                                These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the
                                Services constitute the entire agreement and understanding between you and us. Our failure to exercise or
                                enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or
                                provision.
                            </p>
                        </section>

                        <section id="contact-us" className="mt-8">
                            <h2 className="text-2xl font-bold">24. CONTACT US</h2>
                            <p className="mt-4 text-gray-600">
                                In order to resolve a complaint regarding the Services or to receive further information regarding use of
                                the Services, please contact us at:
                            </p>
                            <div className="mt-4">
                                <p className="font-bold">Resume Builder Lab</p>
                                <p className="text-gray-600">United States</p>
                                <p className="text-gray-600">info@resumebuilderlab.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer10 />
        </div>

    )
}

