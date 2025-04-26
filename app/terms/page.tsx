import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions of Sale</h1>
      <p className="text-sm mb-8">Last Updated: 26/4/25</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Buyer:</strong> The individual or entity purchasing Goods or Services, as listed on the Quotation or Invoice.</li>
          <li><strong>Seller:</strong> The party providing the Goods or Services, identified on the Quotation or Invoice.</li>
          <li><strong>Goods:</strong> All equipment, products, or materials listed.</li>
          <li><strong>Services:</strong> All services listed on a Quotation or Invoice.</li>
          <li><strong>Quotation:</strong> An offer valid for 30 days from the Seller for Goods and/or Services.</li>
          <li><strong>Order:</strong> Buyer's commitment to purchase Goods from the Seller.</li>
          <li><strong>Proforma Invoice:</strong> A request for advance payment after an Order is accepted by Seller in writing or through performance.</li>
        </ul>
      </section>

      {/* Repeat the structure below for each section */}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Order Rights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Seller reserves the right to accept or reject any Order.</li>
          <li>Orders are subject to the Seller’s credit approval policies.</li>
          <li>Buyer may not cancel an Order without the Seller’s written consent.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Pricing and Taxes</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Prices are as per the latest Quotation or Seller’s published pricing.</li>
          <li>All prices are subject to change without notice.</li>
          <li>Buyer is responsible for all applicable taxes, customs duties, clearance charges, and brokerage fees.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
        <p>50% of the payment is due at order confirmation. Remaining 50% must be paid within 3 days of shipment. EMI options are available for the remaining 50% upon request.</p>
        <div className="bg-gray-100 p-4 rounded-md mt-4">
          <p className="font-semibold">Payment Account Details:</p>
          <pre className="whitespace-pre-wrap">
Account Holder: NAME
Bank Name: STATE BANK OF INDIA
Account No: 34360955484
IFSC Code: SBI6823020245
          </pre>
        </div>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Payments are considered received only after funds are cleared.</li>
          <li>Late payments incur interest at the lower of 18% per annum (accruing daily) or the maximum allowed by law.</li>
          <li>Partial deliveries may be invoiced separately and must be paid in full as per the agreed terms.</li>
        </ul>
      </section>

      {/* Add other sections similarly */}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
        <p>Seller reserves the right to modify these Terms at any time. Continued transactions imply Buyer’s acceptance of the updated Terms.</p>
      </section>

    </div>
  );
};

export default TermsAndConditions;
