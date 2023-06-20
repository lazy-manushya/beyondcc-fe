import React from "react";

import Container from "~/components/Container";

import HeroSection from "./components/HeroSection";
import { IHomePageProps } from "./HomePage.types";
import { StyledContainer } from "./HomePage.styles";

const HomePage: React.FC<IHomePageProps> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <HeroSection />

      <Container>
        <h2>The Challenges We Understand</h2>
        <p>
          For Job Seekers: Are you tired of lost applications, unclear job
          descriptions, and uninformed interviews?
        </p>
        <p>
          For Employers: Do you face endless resume filtering, prolonged
          vacancies, and losses due to unfilled critical roles?
        </p>
        <h2>The Beyondcc Difference</h2>
        <p>
          For Job Seekers: We personalise your search, aligning you with
          business roles tailored to your unique skills and experiences.
        </p>
        <p>
          For Employers: We deliver pre-vetted, high-quality candidates,
          reducing your time to hire by 5X and saving up to 30% on hiring costs.
        </p>
        <h2>Beyond Resumes and Job Descriptions</h2>
        <p>
          At Beyondcc, we delve deep into the nuances of job requirements and
          candidates' abilities. We transform traditional hiring, bringing
          objectivity to an otherwise subjective process." (Include an
          image/icon depicting the deep analysis process or objective hiring.)
        </p>

        <h2>Why Beyondcc? We're the Future of Skill Based Hiring</h2>
        <p>
          Beyondcc is the future of objective-based hiring. We understand that
          each job requires a unique set of skills and qualifications, and that
          conventional recruitment processes often fall short. To address this,
          we delve deep into job descriptions and candidates' backgrounds to
          provide precision matchmaking for business professionals. Our goal is
          to reduce subjectivity in hiring and minimize the occurrence of wrong
          hires, saving companies time and resources.
        </p>

        <h2>Our Simple and Efficient Process</h2>
        <ul>
          <li>Create your Profile</li>
          <li>Get Matched</li>
          <li>Secure Your Role</li>
        </ul>

        <h2>Hear from Satisfied Professionals and Businesses</h2>
      </Container>
    </StyledContainer>
  );
};

export default HomePage;
