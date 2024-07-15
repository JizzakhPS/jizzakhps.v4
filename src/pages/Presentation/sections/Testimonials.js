import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// import appleLogo from "assets/images/logos/gray-logos/cambridge-assessment-international-education-vector-logo.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by the</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            PRESIDENT OF UZBEKISTAN
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many TOP scholarship agencies, universities and institutions love
            Jizzakh Presidential School&apos;s students.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 0 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Dilruza Jumanova"
              date="Sep. 19, 2023"
              review="I couldn't even imagine studying abroad before coming to Jizzakh Presidential School. I got acceptance from world's top 100 University - PennState University and now studying there."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Nurbek O'sarov"
              date="Oct. 12, 2023"
              review="'El-Yurt Umidi Foundation' is one of the most selective scholarship agency in Uzbekistan and in the world as well. By big help of my aspiring teachers, I managed to win this fully funding this scholarship and now studying in Top university according to the QS Ranking, University of Minnesota, Twin cities."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Nozimbek Turg'unboyev"
              date="Oct. 12, 2023"
              review="Winning full ride scholarship to the TOP university in the world is almost impossible, but it is not the case for Jizzakh Presidential School Student. Personally I successfully participated and won the reputable 'Stipendium Hungaricum' and studying there. Big Thanks for all who have helped me."
              rating={5}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
