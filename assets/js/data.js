/* =========================================================
   THE ELITE STAY MANAGEMENT - CENTRAL DATA FILE
   Change dummy data from this ONE file.
   December 2026 = demo data | January 2027 = blank
   ========================================================= */

window.ELITE_DATA = {
  app: {
    name: 'The Elite Stay PG & Hostel',
    shortName: 'The Elite Stay',
    version: '1.0.0'
  },
  months: {
    dec2026: { key: 'dec2026', label: 'December 2026', short: 'Dec 2026', isBlank: false },
    jan2027: { key: 'jan2027', label: 'January 2027', short: 'Jan 2027', isBlank: true }
  },
  hostel: {
    totalBeds: 160,
    totalStudents: 150
  },
  students: [
    {id:1,name:'Aman Verma',email:'aman.verma@example.com',type:'Student',mobile:'+91 98765 43210',college:'GL Bajaj, Greater Noida',course:'BCA',year:'2nd Year',guardian:'Rajesh Verma',guardianMobile:'+91 98765 12345',address:'Kanpur, Uttar Pradesh',bookingDate:'2026-08-01',shiftingDate:'2026-08-05',room:'A-101',roomType:'3 Seater',bookingAmount:2000,registrationFee:1000,rent:7000,security:7000,paymentMode:'UPI',status:'Active'},
    {id:2,name:'Rohit Sharma',email:'rohit.sharma@example.com',type:'Student',mobile:'+91 98765 43211',college:'Galgotias University',course:'B.Tech CSE',year:'3rd Year',guardian:'Suresh Sharma',guardianMobile:'+91 98765 12346',address:'Delhi',bookingDate:'2026-07-15',shiftingDate:'2026-07-18',room:'A-102',roomType:'2 Seater',bookingAmount:2000,registrationFee:1000,rent:9000,security:9000,paymentMode:'UPI',status:'Active'},
    {id:3,name:'Priya Singh',email:'priya.singh@example.com',type:'Student',mobile:'+91 98765 43212',college:'GL Bajaj, Greater Noida',course:'BBA',year:'2nd Year',guardian:'Manoj Singh',guardianMobile:'+91 98765 12347',address:'Lucknow, Uttar Pradesh',bookingDate:'2026-09-01',shiftingDate:'2026-09-03',room:'B-203',roomType:'4 Seater',bookingAmount:2000,registrationFee:1000,rent:7000,security:7000,paymentMode:'Cash',status:'Active'},
    {id:4,name:'Kunal Gupta',email:'kunal.gupta@example.com',type:'Student',mobile:'+91 98765 43213',college:'Sharda University',course:'BCA',year:'1st Year',guardian:'Anil Gupta',guardianMobile:'+91 98765 12348',address:'Agra, Uttar Pradesh',bookingDate:'2026-10-02',shiftingDate:'2026-10-05',room:'C-301',roomType:'3 Seater',bookingAmount:2000,registrationFee:1000,rent:8000,security:8000,paymentMode:'UPI',status:'Active'},
    {id:5,name:'Simran Kaur',email:'simran.kaur@example.com',type:'Student',mobile:'+91 98765 43214',college:'Amity University',course:'B.Com',year:'3rd Year',guardian:'Harjit Kaur',guardianMobile:'+91 98765 12349',address:'Punjab',bookingDate:'2026-06-10',shiftingDate:'2026-06-12',room:'B-204',roomType:'2 Seater',bookingAmount:2000,registrationFee:1000,rent:9000,security:9000,paymentMode:'UPI',status:'Active'},
    {id:6,name:'Neha Yadav',email:'neha.yadav@example.com',type:'Employee',mobile:'+91 91234 56780',college:'',course:'',year:'',guardian:'Mahesh Yadav',guardianMobile:'+91 91234 56781',address:'Noida, Uttar Pradesh',bookingDate:'2026-10-10',shiftingDate:'2026-10-12',room:'C-302',roomType:'3 Seater',bookingAmount:2000,registrationFee:1000,rent:8000,security:8000,paymentMode:'UPI',status:'Active'},
    {id:7,name:'Aditya Singh',email:'aditya.singh@example.com',type:'Student',mobile:'+91 99887 66554',college:'NIET, Greater Noida',course:'B.Tech',year:'4th Year',guardian:'Vijay Singh',guardianMobile:'+91 99887 66555',address:'Meerut, Uttar Pradesh',bookingDate:'2026-08-20',shiftingDate:'2026-08-22',room:'D-401',roomType:'4 Seater',bookingAmount:2000,registrationFee:1000,rent:7000,security:7000,paymentMode:'Cash',status:'Active'},
    {id:8,name:'Pooja Verma',email:'pooja.verma@example.com',type:'Student',mobile:'+91 88776 54321',college:'IIMT University',course:'BBA',year:'2nd Year',guardian:'Rakesh Verma',guardianMobile:'+91 88776 54322',address:'Ghaziabad, Uttar Pradesh',bookingDate:'2026-11-01',shiftingDate:'2026-11-03',room:'D-402',roomType:'2 Seater',bookingAmount:2000,registrationFee:1000,rent:9000,security:9000,paymentMode:'UPI',status:'Active'}
  ],
  payments: [
    {id:1,studentId:1,month:'dec2026',amount:7000,date:'2026-12-02',mode:'UPI',status:'Paid'},
    {id:2,studentId:2,month:'dec2026',amount:9000,date:'2026-12-03',mode:'UPI',status:'Paid'},
    {id:3,studentId:3,month:'dec2026',amount:0,date:'',mode:'',status:'Pending'},
    {id:4,studentId:4,month:'dec2026',amount:8000,date:'2026-12-05',mode:'UPI',status:'Paid'},
    {id:5,studentId:5,month:'dec2026',amount:9000,date:'2026-12-04',mode:'UPI',status:'Paid'},
    {id:6,studentId:6,month:'dec2026',amount:8000,date:'2026-12-06',mode:'Cash',status:'Paid'},
    {id:7,studentId:7,month:'dec2026',amount:0,date:'',mode:'',status:'Pending'},
    {id:8,studentId:8,month:'dec2026',amount:9000,date:'2026-12-08',mode:'UPI',status:'Paid'}
  ],
  expenses: {
    dec2026: {
      weeks: [
        {week:'Week 1',range:'01 Dec – 07 Dec',total:112500},
        {week:'Week 2',range:'08 Dec – 14 Dec',total:98200},
        {week:'Week 3',range:'15 Dec – 21 Dec',total:136800},
        {week:'Week 4',range:'22 Dec – 31 Dec',total:139000}
      ],
      categories: {
        propertyRent:80000,electricity:25000,water:7000,internet:3500,workerSalary:90000,
        monthlyRation:38000,lpg:6500,cleaning:5500,furniture:7000,cctv:3000,governmentFees:0,
        foodService:18000,misc:12000,vegetables:21000,grocery:18000,transportation:4500,
        petrol:6500,milk:7000,freshVegetables:9000,repair:3500,dailyLabour:8000,other:15000
      },
      total:486500
    },
    jan2027: { weeks: [], categories: {}, total:0 }
  },
  visitors: {
    dec2026: [
      {id:1,name:'Rahul Mishra',mobile:'+91 98765 43210',room:'2 Seater',source:'Google',date:'2026-12-02'},
      {id:2,name:'Neha Yadav',mobile:'+91 91234 56780',room:'3 Seater',source:'Instagram',date:'2026-12-04'},
      {id:3,name:'Aditya Singh',mobile:'+91 99887 66554',room:'1 Seater',source:'Friend',date:'2026-12-08'},
      {id:4,name:'Pooja Verma',mobile:'+91 88776 54321',room:'2 Seater',source:'Google',date:'2026-12-11'},
      {id:5,name:'Arjun Mehta',mobile:'+91 90000 12345',room:'3 Seater',source:'Instagram',date:'2026-12-16'},
      {id:6,name:'Riya Sharma',mobile:'+91 90000 12346',room:'4 Seater',source:'Friend',date:'2026-12-19'},
      {id:7,name:'Mohit Kumar',mobile:'+91 90000 12347',room:'2 Seater',source:'Google',date:'2026-12-23'},
      {id:8,name:'Anjali Gupta',mobile:'+91 90000 12348',room:'3 Seater',source:'Other',date:'2026-12-27'}
    ],
    jan2027: []
  }
};
