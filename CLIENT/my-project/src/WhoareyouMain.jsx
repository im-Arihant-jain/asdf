import React from 'react';
//import eventOrganiser from './assets/eventOrganiser.png';
// import company from './assets/companyWhoAreYou.png';
// import influencer from './assets/InfluencerWhoAreYou.png';
 import WhoareyouBox from './WhoareyouBox';

 

function WhoareyouMain({ onButtonClick }) {
  return (      
    <main className="flex flex-col items-center justify-center py-8">
      <p className="mx-5 mb-28 mt-5 w-full text-center text-xl font-bold text-primary-700 lg:w-1/2">Join thousands of others making smarter, faster, more impactful sponsorship decisions with Sponsogram.</p>

      <h1 className="mb-12 text-4xl font-bold">WHO ARE YOU?</h1>

      <section className="flex flex-wrap items-center justify-center gap-10">
        <WhoareyouBox image= {`https://s3-alpha-sig.figma.com/img/bacd/526f/674890689eb56f707808efcc96585b82?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4p-tp1gs11RKcEHNWnX9TITOcq7PMg5qBvDAKqJo6VbGz9cVV5n~I5WGnxzi~293975ZP4jYd5I~sIKzXawICyOX5Sl7fjcAQoRxGXSyGz87LlugnS3KabVNkkqU-p60KLDYa23PRGndrjD-3X9WNASZWY-w5L2byRl097b~A9RG6MstkJoOpH7xhY4neBwQ8O8qCnD0c72cxuVEezaRXBJJV2WXXXE36DIjxCup1oYuMVpfBWB-CGjMasCU03ruunowzM-sVcOIt-9ImKXyYBDZ81TYE7BgHnZ5sDk3b1Umt1fpFjsslPDGtT3w2EDNAzwyCidFjq1oAXgal-CXQ__`} text="GOVT. OFFICIAL" onButtonClick ={onButtonClick} />
        <WhoareyouBox image={`https://s3-alpha-sig.figma.com/img/bacd/526f/674890689eb56f707808efcc96585b82?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4p-tp1gs11RKcEHNWnX9TITOcq7PMg5qBvDAKqJo6VbGz9cVV5n~I5WGnxzi~293975ZP4jYd5I~sIKzXawICyOX5Sl7fjcAQoRxGXSyGz87LlugnS3KabVNkkqU-p60KLDYa23PRGndrjD-3X9WNASZWY-w5L2byRl097b~A9RG6MstkJoOpH7xhY4neBwQ8O8qCnD0c72cxuVEezaRXBJJV2WXXXE36DIjxCup1oYuMVpfBWB-CGjMasCU03ruunowzM-sVcOIt-9ImKXyYBDZ81TYE7BgHnZ5sDk3b1Umt1fpFjsslPDGtT3w2EDNAzwyCidFjq1oAXgal-CXQ__`} text="COMMON MAN" onButtonClick = {onButtonClick}/>
        <WhoareyouBox image={`https://s3-alpha-sig.figma.com/img/bacd/526f/674890689eb56f707808efcc96585b82?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4p-tp1gs11RKcEHNWnX9TITOcq7PMg5qBvDAKqJo6VbGz9cVV5n~I5WGnxzi~293975ZP4jYd5I~sIKzXawICyOX5Sl7fjcAQoRxGXSyGz87LlugnS3KabVNkkqU-p60KLDYa23PRGndrjD-3X9WNASZWY-w5L2byRl097b~A9RG6MstkJoOpH7xhY4neBwQ8O8qCnD0c72cxuVEezaRXBJJV2WXXXE36DIjxCup1oYuMVpfBWB-CGjMasCU03ruunowzM-sVcOIt-9ImKXyYBDZ81TYE7BgHnZ5sDk3b1Umt1fpFjsslPDGtT3w2EDNAzwyCidFjq1oAXgal-CXQ__`} text="SOCIAL WORKER"  onButtonClick = {onButtonClick}/>
      </section>
    </main>
  );
}

export default WhoareyouMain;
