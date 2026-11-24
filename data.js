const AGENTS = {
 "forams": {
  "name": "Foram_S",
  "initials": "FS",
  "cq": 96,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 1,
  "params": {
   "opening": 0,
   "probing": 1,
   "sales": 0,
   "softskills": 0,
   "closing": 0,
   "followup": 0
  },
  "aois": [
   {
    "cat": "probing",
    "label": "Probing",
    "text": "Discovery questions &amp; one-view probing — identify the customer's jewellery, delivery and payment needs in one structured pass."
   }
  ],
  "cases": [
   {
    "query": "Profile Balance · 17 Nov",
    "score": 100,
    "comment": "Good work!!  Customer Experience Score: 100 · FCR: Yes"
   },
   {
    "query": "Early Delivery · 17 Nov",
    "score": 100,
    "comment": "Good work!! Non-converted reason: Early delivery for not possible. Customer Experience Score: 75 · FCR: Yes"
   },
   {
    "query": "Customization - New Design · 16 Nov",
    "score": 100,
    "comment": "Good work!!  Customer Experience Score: 100 · FCR: Yes"
   },
   {
    "query": "SKU related query · 16 Nov",
    "score": 85,
    "comment": "Probing (slight): One view Probing. Customer Experience Score: 0"
   }
  ],
  "paramCaseMap": {
   "opening": [],
   "probing": [
    3
   ],
   "sales": [],
   "softskills": [],
   "closing": [],
   "followup": []
  },
  "color": "#0891b2"
 },
 "sabas": {
  "name": "Saba_S",
  "initials": "SS",
  "cq": 86,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 5,
  "params": {
   "opening": 1,
   "probing": 0,
   "sales": 1,
   "softskills": 3,
   "closing": 0,
   "followup": 0
  },
  "aois": [
   {
    "cat": "sales",
    "label": "Sales Closure",
    "text": "Give a complete and correct solution — check policy knowledge before answering (e.g. payment policy)."
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Personalization — use the customer's name at least 3 times (max 4) during the chat."
   },
   {
    "cat": "opening",
    "label": "Opening",
    "text": "Acknowledge the customer's occasion (wishing) in the opening."
   }
  ],
  "cases": [
   {
    "query": "Wants to place order · 17 Nov",
    "score": 70,
    "comment": "Sales Closure (significant): Giving Complete and Correct Solution. Non-converted reason: JC was unaware of payment policy. Customer Experience Score: 50 · FCR: Yes"
   },
   {
    "query": "SKU related query · 17 Nov",
    "score": 90,
    "comment": "Soft Skills (significant): Personalization - taking Cx name atleast 3 times max 4. Non-converted reason: Cx wants to make a future purchase. Customer Experience Score: 100 · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 16 Nov",
    "score": 95,
    "comment": "Soft Skills (slight): attribute detail missing in the audit sheet. Customer Experience Score: 75 · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 16 Nov",
    "score": 88,
    "comment": "Opening (slight): Acknowledge occasion (Wishing). Soft Skills (significant): attribute detail missing in the audit sheet. Customer Experience Score: 75 · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [
    3
   ],
   "probing": [],
   "sales": [
    0
   ],
   "softskills": [
    1,
    2,
    3
   ],
   "closing": [],
   "followup": []
  },
  "color": "#16a34a"
 },
 "saptoshid": {
  "name": "Saptoshi_D",
  "initials": "SD",
  "cq": 81,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 6,
  "params": {
   "opening": 0,
   "probing": 0,
   "sales": 1,
   "softskills": 3,
   "closing": 2,
   "followup": 0
  },
  "aois": [
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Pitch the CSAT survey before closing the chat. (seen on 2 audits)"
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Personalization — use the customer's name at least 3 times (max 4) during the chat."
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Assurances &amp; acknowledgement — use positive phrases to keep the customer confident."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Tag correctly and update the systems before closing."
   },
   {
    "cat": "sales",
    "label": "Sales Closure",
    "text": "Recommend jewellery and offer alternatives when the first request cannot be converted."
   }
  ],
  "cases": [
   {
    "query": "PoP - Redemption · 18 Nov",
    "score": 73,
    "comment": "Soft Skills (slight): Personalization - taking Cx name atleast 3 times max 4, Assurances and acknowledgement (using Positive phrases). Closing (slight): Was CSAT Survey Pitched?. Non-converted reason: Cx wanted to redeem CTC balance, but the edge value depreciated. Customer Experience Score: 100 · FCR: Yes"
   },
   {
    "query": "Early Delivery · 18 Nov",
    "score": 75,
    "comment": "Closing (significant): Was CSAT Survey Pitched?, Tagged corretly and Systems are updated. Non-converted reason: Jc made no efforts to followup and close the sale. Customer Experience Score: 50 · FCR: No"
   },
   {
    "query": "Life Time Exchange/buyback · 16 Nov",
    "score": 95,
    "comment": "Soft Skills (slight): attribute detail missing in the audit sheet. Customer Experience Score: 75 · FCR: Yes"
   },
   {
    "query": "Customization - New Design · 16 Nov",
    "score": 80,
    "comment": "Sales Closure (slight): Jewellery Recommendation/ Offer Alternatives. Soft Skills (slight): attribute detail missing in the audit sheet. Customer Experience Score: 75 · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [],
   "probing": [],
   "sales": [
    3
   ],
   "softskills": [
    0,
    2,
    3
   ],
   "closing": [
    0,
    1
   ],
   "followup": []
  },
  "color": "#7c3aed"
 },
 "saurabhg": {
  "name": "Saurabh_G",
  "initials": "SG",
  "cq": 79,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 7,
  "params": {
   "opening": 0,
   "probing": 1,
   "sales": 1,
   "softskills": 3,
   "closing": 1,
   "followup": 1
  },
  "aois": [
   {
    "cat": "probing",
    "label": "Probing",
    "text": "Discovery questions &amp; one-view probing — identify the customer's jewellery, delivery and payment needs in one structured pass."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Pitch the CSAT survey before closing the chat."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Tag correctly and update the systems before closing."
   },
   {
    "cat": "followup",
    "label": "Follow Up",
    "text": "Follow up as per guidelines and commitment."
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Personalization — use the customer's name at least 3 times (max 4) during the chat."
   },
   {
    "cat": "sales",
    "label": "Sales Closure",
    "text": "Attract towards sales — talk about xCL, offers, PoP, coupons and new collections, and pitch other services when relevant."
   }
  ],
  "cases": [
   {
    "query": "PoP - Redemption · 17 Nov",
    "score": 58,
    "comment": "Probing (significant): Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' &amp; 'Payment'), One view Probing. Closing (slight): Was CSAT Survey Pitched?, Tagged corretly and Systems are updated. Follow Up (slight): Follow up done as per guidelines &amp; commitment. Non-converted reason: JC missed on sales closure efforts. Customer Experience Score: 75 · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 17 Nov",
    "score": 95,
    "comment": "Soft Skills (slight): Personalization - taking Cx name atleast 3 times max 4. Customer Experience Score: 100 · FCR: Yes"
   },
   {
    "query": "Wants to know Offers/Discounts · 16 Nov",
    "score": 75,
    "comment": "Sales Closure (slight): Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant. Soft Skills (significant): attribute detail missing in the audit sheet. Customer Experience Score: 75 · FCR: Yes"
   },
   {
    "query": "Product Availability in Store · 16 Nov",
    "score": 90,
    "comment": "Soft Skills (significant): attribute detail missing in the audit sheet. Customer Experience Score: 75 · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [],
   "probing": [
    0
   ],
   "sales": [
    2
   ],
   "softskills": [
    1,
    2,
    3
   ],
   "closing": [
    0
   ],
   "followup": [
    0
   ]
  },
  "color": "#ea580c"
 }
};

const PARAM_LABELS = {"opening": "Opening", "probing": "Probing", "sales": "Sales Closure", "softskills": "Soft Skills", "closing": "Closing", "followup": "Follow Up"};
const PARAM_SHORT = {"opening": "Opening", "probing": "Probing", "sales": "Sales Closure", "softskills": "Soft Skills", "closing": "Closing", "followup": "Follow Up"};
const PARAM_COLORS = {"opening": "#2563eb", "probing": "#7c3aed", "sales": "#dc2626", "softskills": "#ea580c", "closing": "#0891b2", "followup": "#16a34a"};
