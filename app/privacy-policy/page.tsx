import { Navbar } from "@/components/ui/navbar"
import Footer10 from "@/layouts/landing/footer"
import Head from "next/head"

export default function PrivacyPolicy() {
    return (
        <div className="flex-grow container mx-auto px-4 pt-16">
            <Navbar />
            <div className="bg-white text-gray-900 font-sans">
                <Head>
                    <title>Privacy Policy - Resume Builder Lab</title>
                    <meta name="description" content="Privacy Policy for Resume Builder Lab" />
                </Head>

                <div className="max-w-4xl mx-auto p-6">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <h1 className="text-3xl font-bold mb-2">PRIVACY POLICY</h1>
                        <p className="text-gray-600 text-sm">Last updated February 18, 2025</p>
                    </header>

                    {/* Introduction */}
                    <section className="mb-12">
                        <p className="text-gray-700 mb-4">
                            This Privacy Notice for <strong>Resume Builder Lab</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), describes how and why we might access, collect, store, use, and/or share (&quot;process&quot;) your personal information when you use our services (&quot;Services&quot;), including when you:
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Visit our website at <a href="https://www.resumebuilderlab.com" className="text-blue-600 hover:underline">https://www.resumebuilderlab.com</a>, or any website of ours that links to this Privacy Notice.</li>
                            <li>Engage with us in other related ways, including any sales, marketing, or events.</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@resumebuilderlab.com" className="text-blue-600 hover:underline">info@resumebuilderlab.com</a>.
                        </p>
                    </section>

                    {/* Summary of Key Points */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">SUMMARY OF KEY POINTS</h2>
                        <p className="text-gray-700 mb-4">
                            <em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</em>
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li><strong>What personal information do we process?</strong> Learn more about <a href="#personalinfo" className="text-blue-600 hover:underline">personal information you disclose to us</a>.</li>
                            <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
                            <li><strong>Do we collect any information from third parties?</strong> Learn more about <a href="#othersources" className="text-blue-600 hover:underline">information collected from other sources</a>.</li>
                            <li><strong>How do we process your information?</strong> Learn more about <a href="#infouse" className="text-blue-600 hover:underline">how we process your information</a>.</li>
                            <li><strong>In what situations and with which parties do we share personal information?</strong> Learn more about <a href="#whoshare" className="text-blue-600 hover:underline">when and with whom we share your personal information</a>.</li>
                            <li><strong>How do we keep your information safe?</strong> Learn more about <a href="#infosafe" className="text-blue-600 hover:underline">how we keep your information safe</a>.</li>
                            <li><strong>What are your rights?</strong> Learn more about <a href="#privacyrights" className="text-blue-600 hover:underline">your privacy rights</a>.</li>
                            <li><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a <a href="https://app.termly.io/notify/bacf2cfc-0f99-40c1-a07f-d8fc3f1ec0a3" className="text-blue-600 hover:underline">data subject access request</a> or by contacting us.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">TABLE OF CONTENTS</h2>
                        <ol className="list-decimal list-inside text-gray-700">
                            <li>
                                <a href="#infocollect" className="text-blue-600 hover:underline">
                                    WHAT INFORMATION DO WE COLLECT?
                                </a>
                            </li>
                            <li>
                                <a href="#infouse" className="text-blue-600 hover:underline">
                                    HOW DO WE PROCESS YOUR INFORMATION?
                                </a>
                            </li>
                            <li>
                                <a href="#legalbases" className="text-blue-600 hover:underline">
                                    WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
                                </a>
                            </li>
                            <li>
                                <a href="#whoshare" className="text-blue-600 hover:underline">
                                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                                </a>
                            </li>
                            <li>
                                <a href="#cookies" className="text-blue-600 hover:underline">
                                    DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                                </a>
                            </li>
                            <li>
                                <a href="#ai" className="text-blue-600 hover:underline">
                                    DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
                                </a>
                            </li>
                            <li>
                                <a href="#sociallogins" className="text-blue-600 hover:underline">
                                    HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                                </a>
                            </li>
                            <li>
                                <a href="#intltransfers" className="text-blue-600 hover:underline">
                                    IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                                </a>
                            </li>
                            <li>
                                <a href="#inforetain" className="text-blue-600 hover:underline">
                                    HOW LONG DO WE KEEP YOUR INFORMATION?
                                </a>
                            </li>
                            <li>
                                <a href="#infosafe" className="text-blue-600 hover:underline">
                                    HOW DO WE KEEP YOUR INFORMATION SAFE?
                                </a>
                            </li>
                            <li>
                                <a href="#infominors" className="text-blue-600 hover:underline">
                                    DO WE COLLECT INFORMATION FROM MINORS?
                                </a>
                            </li>
                            <li>
                                <a href="#privacyrights" className="text-blue-600 hover:underline">
                                    WHAT ARE YOUR PRIVACY RIGHTS?
                                </a>
                            </li>
                            <li>
                                <a href="#DNT" className="text-blue-600 hover:underline">
                                    CONTROLS FOR DO-NOT-TRACK FEATURES
                                </a>
                            </li>
                            <li>
                                <a href="#uslaws" className="text-blue-600 hover:underline">
                                    DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                                </a>
                            </li>
                            <li>
                                <a href="#policyupdates" className="text-blue-600 hover:underline">
                                    DO WE MAKE UPDATES TO THIS NOTICE?
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-blue-600 hover:underline">
                                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                                </a>
                            </li>
                            <li>
                                <a href="#request" className="text-blue-600 hover:underline">
                                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                                </a>
                            </li>
                        </ol>
                    </section>

                    <section id="infocollect" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
                        <h3 className="text-xl font-bold mb-2">Personal information you disclose to us</h3>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> We collect personal information that you provide to us.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            We collect personal information that you voluntarily provide to us when you register on the Services,
                            express an interest in obtaining information about us or our products and Services, when you participate in
                            activities on the Services, or otherwise when you contact us.
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on
                            the context of your interactions with us and the Services, the choices you make, and the products and
                            features you use. The personal information we collect may include the following:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Names</li>
                            <li>Phone numbers</li>
                            <li>Email addresses</li>
                            <li>Mailing addresses</li>
                            <li>Job titles</li>
                            <li>Passwords</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            <strong>Sensitive Information.</strong> We do not process sensitive information.
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases,
                            such as your payment instrument number (such as a credit card number), and the security code associated with
                            your payment instrument. All payment data is stored by lemonsqueezy. You may find their privacy notice
                            link(s) here:{" "}
                            <a
                                href="https://www.lemonsqueezy.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                https://www.lemonsqueezy.com/privacy
                            </a>
                            .
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your
                            existing social media account details, like your Facebook, Twitter, or other social media account. If you
                            choose to register in this way, we will collect the information described in the section called &quot;HOW DO WE
                            HANDLE YOUR SOCIAL LOGINS?&quot; below.
                        </p>
                    </section>

                    <section id="infouse" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> We process your information to provide, improve, and administer our Services,
                                communicate with you, for security and fraud prevention, and to comply with law. We may also process your
                                information for other purposes with your consent.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            We process your personal information for a variety of reasons, depending on how you interact with our
                            Services, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>To facilitate account creation and authentication and otherwise manage user accounts.</li>
                            <li>To deliver and facilitate delivery of services to the user.</li>
                            <li>To respond to user inquiries/offer support to users.</li>
                            <li>To send administrative information to you.</li>
                            <li>To comply with our legal obligations.</li>
                            <li>To protect our Services.</li>
                            <li>To save or protect an individual&apos;s vital interest.</li>
                        </ul>
                    </section>

                    <section id="legalbases" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">
                            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> We only process your personal information when we believe it is necessary and
                                we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to
                                comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to
                                protect your rights, or to fulfill our legitimate business interests.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">If you are located in the EU or UK, this section applies to you.</p>
                        <p className="text-gray-700 mb-4">
                            The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we
                            rely on in order to process your personal information. As such, we may rely on the following legal bases to
                            process your personal information:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>
                                <strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent)
                                to use your personal information for a specific purpose.
                            </li>
                            <li>
                                <strong>Performance of a Contract.</strong> We may process your personal information when we believe it is
                                necessary to fulfill our contractual obligations to you, including providing our Services or at your
                                request prior to entering into a contract with you.
                            </li>
                            <li>
                                <strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for
                                compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory
                                agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in
                                which we are involved.
                            </li>
                            <li>
                                <strong>Vital Interests.</strong> We may process your information where we believe it is necessary to
                                protect your vital interests or the vital interests of a third party, such as situations involving
                                potential threats to the safety of any person.
                            </li>
                        </ul>
                    </section>

                    <section id="whoshare" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> We may share information in specific situations described in this section
                                and/or with the following third parties.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            We may need to share your personal information in the following situations:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>
                                <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or
                                during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion
                                of our business to another company.
                            </li>
                        </ul>
                    </section>

                    <section id="cookies" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your
                                information.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store
                            information. Specific information about how we use such technologies and how you can refuse certain cookies
                            is set out in our Cookie Notice:{" "}
                            <a
                                href="https://www.resumebuilderlab.com/cookie-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                https://www.resumebuilderlab.com/cookie-policy
                            </a>
                            .
                        </p>
                    </section>

                    <section id="ai" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence,
                                machine learning, or similar technologies.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine
                            learning, or similar technologies (collectively, &apos;AI Products&apos;). These tools are designed to enhance your
                            experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of
                            the AI Products within our Services.
                        </p>
                        <h3 className="text-xl font-bold mb-2">Use of AI Technologies</h3>
                        <p className="text-gray-700 mb-4">
                            We provide the AI Products through third-party service providers (&apos;AI Service Providers&apos;), including Google
                            Cloud AI. As outlined in this Privacy Notice, your input, output, and personal information will be shared
                            with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined
                            in &apos;WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?&apos; You must not use the AI Products
                            in any way that violates the terms or policies of any AI Service Provider.
                        </p>
                    </section>

                    <section id="sociallogins" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> If you choose to register or log in to our Services using a social media
                                account, we may have access to certain information about you.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our Services offer you the ability to register and log in using your third-party social media account
                            details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile
                            information about you from your social media provider. The profile information we receive may vary depending
                            on the social media provider concerned, but will often include your name, email address, friends list, and
                            profile picture, as well as other information you choose to make public on such a social media platform.
                        </p>
                        <p className="text-gray-700 mb-4">
                            We will use the information we receive only for the purposes that are described in this Privacy Notice or
                            that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are
                            not responsible for, other uses of your personal information by your third-party social media provider. We
                            recommend that you review their privacy notice to understand how they collect, use, and share your personal
                            information, and how you can set your privacy preferences on their sites and apps.
                        </p>
                    </section>

                    <section id="intltransfers" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> We may transfer, store, and process your information in countries other than
                                your own.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our servers are located in the United States. If you are accessing our Services from outside the United
                            States, please be aware that your information may be transferred to, stored, and processed by us in our
                            facilities and by those third parties with whom we may share your personal information (see &quot;WHEN AND WITH
                            WHOM DO WE SHARE YOUR PERSONAL INFORMATION?&quot; above), in the United States, and other countries.
                        </p>
                        <p className="text-gray-700 mb-4">
                            If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these
                            countries may not necessarily have data protection laws or other similar laws as comprehensive as those in
                            your country. However, we will take all necessary measures to protect your personal information in
                            accordance with this Privacy Notice and applicable law.
                        </p>
                    </section>

                    <section id="inforetain" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">9. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes
                                outlined in this Privacy Notice unless otherwise required by law.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            We will only keep your personal information for as long as it is necessary for the purposes set out in this
                            Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting,
                            or other legal requirements). No purpose in this notice will require us keeping your personal information
                            for longer than the period of time in which users have an account with us.
                        </p>
                        <p className="text-gray-700 mb-4">
                            When we have no ongoing legitimate business need to process your personal information, we will either delete
                            or anonymize such information, or, if this is not possible (for example, because your personal information
                            has been stored in backup archives), then we will securely store your personal information and isolate it
                            from any further processing until deletion is possible.
                        </p>
                    </section>

                    <section id="infosafe" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">10. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> We aim to protect your personal information through a system of organizational
                                and technical security measures.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            We have implemented appropriate and reasonable technical and organizational security measures designed to
                            protect the security of any personal information we process. However, despite our safeguards and efforts to
                            secure your information, no electronic transmission over the Internet or information storage technology can
                            be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
                            unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or
                            modify your information. Although we will do our best to protect your personal information, transmission of
                            personal information to and from our Services is at your own risk. You should only access the Services
                            within a secure environment.
                        </p>
                    </section>

                    <section id="infominors" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">11. DO WE COLLECT INFORMATION FROM MINORS?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of
                                age.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services,
                            you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to
                            such minor dependent&apos;s use of the Services. If we learn that personal information from users less than 18
                            years of age has been collected, we will deactivate the account and take reasonable measures to promptly
                            delete such data from our records. If you become aware of any data we may have collected from children under
                            age 18, please contact us at info@resumebuilderlab.com.
                        </p>
                    </section>

                    <section id="privacyrights" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">12. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> In some regions, such as the European Economic Area (EEA), United Kingdom (UK),
                                Switzerland, and Canada, you have rights that allow you greater access to and control over your personal
                                information. You may review, change, or terminate your account at any time.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data
                            protection laws. These may include the right (i) to request access and obtain a copy of your personal
                            information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal
                            information; (iv) if applicable, to data portability; and (v) not to be subject to automated
                            decision-making. In certain circumstances, you may also have the right to object to the processing of your
                            personal information. You can make such a request by contacting us by using the contact details provided in
                            the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
                        </p>
                        <p className="text-gray-700 mb-4">
                            We will consider and act upon any request in accordance with applicable data protection laws.
                        </p>
                    </section>

                    <section id="DNT" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">13. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
                        <p className="text-gray-700 mb-4">
                            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&quot;DNT&quot;)
                            feature or setting you can activate to signal your privacy preference not to have data about your online
                            browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing
                            and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals
                            or any other mechanism that automatically communicates your choice not to be tracked online. If a standard
                            for online tracking is adopted that we must follow in the future, we will inform you about that practice in
                            a revised version of this Privacy Notice.
                        </p>
                    </section>

                    <section id="uslaws" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">14. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida,
                                Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Tennessee,
                                Texas, Utah, or Virginia, you may have the right to request access to and receive details about the
                                personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy
                                of, or delete your personal information. You may also have the right to withdraw your consent to our
                                processing of your personal information. These rights may be limited in some circumstances by applicable
                                law. More information is provided below.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data
                            protection laws. These may include the right (i) to request access and obtain a copy of your personal
                            information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal
                            information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the
                            right to object to the processing of your personal information. To make such a request, please use the
                            contact details provided below. We will consider and act upon any request in accordance with applicable data
                            protection laws.
                        </p>
                    </section>

                    <section id="policyupdates" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">15. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
                        <p className="text-gray-700 mb-4">
                            <em>
                                <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant
                                laws.
                            </em>
                        </p>
                        <p className="text-gray-700 mb-4">
                            We may update this Privacy Notice from time to time. The updated version will be indicated by an updated
                            &quot;Revised&quot; date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may
                            notify you either by prominently posting a notice of such changes or by directly sending you a notification.
                            We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your
                            information.
                        </p>
                    </section>

                    <section id="contact" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
                        <p className="text-gray-700 mb-4">
                            If you have questions or comments about this notice, you may email us at info@resumebuilderlab.com or
                            contact us by post at:
                        </p>
                        <address className="text-gray-700 not-italic">
                            Resume Builder Lab
                            <br />
                            California
                            <br />
                            CA
                            <br />
                            United States
                        </address>
                    </section>

                    <section id="request" className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">
                            17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Based on the applicable laws of your country or state of residence in the US, you may have the right to
                            request access to the personal information we collect from you, change that information, or delete it. To
                            request to review, update, or delete your personal information, please submit a request form by clicking{" "}
                            <a
                                href="https://app.termly.io/notify/bacf2cfc-0f99-40c1-a07f-d8fc3f1ec0a3"
                                className="text-blue-600 hover:underline"
                            >
                                here
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
            <Footer10 />
        </div>
    )
}

