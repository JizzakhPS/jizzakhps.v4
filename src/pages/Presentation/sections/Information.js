import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Study in
                    <br />
                    Jizzakh PS
                  </>
                }
                description="You wish to study in specific environment with dedicated, selected students and teachers with no any fee..."
              />
              <RotatingCardBack
                image={bgBack}
                title="Steps"
                description="Every summer, we conduct an admission test exclusively for 4th-grade graduates who are citizens of Uzbekistan. To be eligible, applicants must have achieved a grade of 5 in all subjects. Successful candidates proceed to a two-step examination process."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Learn More",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="auto_stories"
                  title="International System"
                  description="Embracing the Cambridge curriculum, we offer globally recognized IGCSE and AS/A Level exams, paving the way for academic excellence and global opportunities."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="money_off"
                  title="Discover Limitless Possibilities"
                  description="Everything is free – from dormitories to meals, textbooks to laptops, and uniforms. Experience education without barriers and unlock your full potential."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="school"
                  title="Build your Future"
                  description=" Our graduates are equipped with the skills, knowledge, and support they need to pursue admission to the world's top universities."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="public"
                  title="Learn from international perspectives"
                  description="Our international teachers hold advanced degrees, including master's and PhD qualifications."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
