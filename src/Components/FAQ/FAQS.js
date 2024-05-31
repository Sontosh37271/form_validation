import React, { useState } from 'react'

import {faqsdata} from './data.js';
import FAQ from './FAQ.js';

const FAQS = () => {
    const [faqs,setFaqs]=useState(faqsdata);
  return (
    <main>
        <section>
            <h2>FAQ data</h2>
            {faqs.map(faq => <FAQ key={faq.id} {...faq}/>)}
        </section>
    </main>
  )
};

export default FAQS
