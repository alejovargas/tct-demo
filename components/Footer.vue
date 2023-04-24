<template>
  <footer class="w-full bg-[#0FC1EA]">
    <div class="container h-44 mx-auto flex items-center justify-between">
      <NuxtLink :to="localePath('/')">
        <img src="/logo-tct-b.svg" alt="The Chidrens Trust" />
      </NuxtLink>
    </div>
    <div
      class="container mx-auto grid grid-flow-col auto-cols-4 text-sm pb-20 border-solid border-b-2 border-black"
    >
      <div>
        <ul>
          <li>About The Trust</li>
          <li>How We Fund</li>
          <li>Frequently Asked Questions</li>
          <li>Board of Directors</li>
          <li>Financial Information</li>
          <li>Careers</li>
          <li>Procurement</li>
          <li>Public Records Request</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold">Parents & Caregivers</h3>
        <ul>
          <li>Find A Program</li>
          <li>Content StayHome.Miami</li>
          <li>Calendar</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold">Providers</h3>
        <ul>
          <li>Trust Central</li>
          <li>Trust Academy</li>
          <li>Provider Calendar</li>
          <li>Policies & Forms</li>
          <li>Audit Submission</li>
          <li>Communications Toolbox</li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold">Grants</h3>
        <ul>
          <li>Eligible Applicants</li>
          <li>General Programmatic Funding Requirements</li>
          <li>Legal Requirements</li>
          <li>Competitive Procurement Appeals Process</li>
          <li>Application Review Process</li>
          <li>Grant FAQs</li>
          <li>Glossary of Terms</li>
          <li>Trust Central Tips</li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto flex flex-row py-5">
      <div class="basis-4/5 text-xs font-light">
        © 2023 The Children's Trust is a dedicated source of revenue established
        by voter referendum to improve the lives of all children and families in
        Miami-Dade County.<br />3150 SW 3rd Avenue, 8th Floor, Miami, FL 33129 |
        Phone: 305.571.5700 | Privacy Policy | Terms of Use
      </div>
      <div class="basis-1/5 flex flex-row-reverse gap-2">
        <img src="/facebook.svg" alt="facebook" />
        <img src="/instagram.svg" alt="instagram" />
        <img src="/twitter.svg" alt="twitter" />
        <img src="/linkedin.svg" alt="linkedin" />
        <img src="/youtube.svg" alt="youtube" />
      </div>
    </div>
  </footer>
</template>
