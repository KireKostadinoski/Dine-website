/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md:'768px',
      lg:'1020px',
      xl:'1440px',
    },
    extend: {
      fontFamily: {
        sans: ["League Spartan", 'system-ui'],
      },
      lineHeight: {
        '80px': '80px',
        '64px': '64px',
        '60px': '60px',
        '40px': '40px',
        '48px': '48px',
        '30px': '30px',
        '26px': '26px',
        '24px': '24px',
      },
      letterSpacing: {
        '-1px': '-1px',
      },
      backgroundImage: () => ({
        homeBgDesktop: "url('../images/homepage/hero-bg-desktop.jpg')",
        homeBgTablet: "url('../images/homepage/hero-bg-tablet.jpg')",
        homeBgMobile: "url('../images/homepage/hero-bg-mobile.jpg')",
        enjoyablePlaceDesktop: "url('../images/homepage/enjoyable-place-desktop.jpg')",
        enjoyablePlaceTablet: "url('../images/homepage/enjoyable-place-tablet.jpg')",
        enjoyablePlaceMobile: "url('../images/homepage/enjoyable-place-mobile.jpg')",
        localySourcedDesktop:  "url('../images/homepage/locally-sourced-desktop.jpg')",
        localySourcedTablet:  "url('../images/homepage/locally-sourced-tablet.jpg')",
        localySourcedMobile:  "url('../images/homepage/locally-sourced-mobile.jpg')",
        familyGatheringDesktop:  "url('../images/homepage/family-gathering-desktop.jpg')",
        footerBgDesktop:  "url('../images/homepage/ready-bg-desktop.jpg')",
        footerBgTablet:  "url('../images/homepage/ready-bg-tablet.jpg')",
        footerBgMobile:  "url('../images/homepage/ready-bg-mobile.jpg')",
        bookingBgDesktop: "url('../images/booking/hero-bg-desktop.jpg')",
        bookingBgTablet: "url('../images/booking/hero-bg-tablet.jpg')",
        bookingBgMobile: "url('../images/booking/hero-bg-mobile.jpg')",
      }),
    },
  },
  plugins: [],
}

