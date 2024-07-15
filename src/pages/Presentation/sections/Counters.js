import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import "./counter.css"

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid className="CounterText" container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={100}
              suffix="+"
              title="Staff"
              description="Passionate and dedicated educators empowering student success"
              color="#294078"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={7}
              suffix=".0"
              title="IELTS score"
              description="Average IELTS Score of students of the Presidential School in Jizzakh is 7.0"
              color="#294078"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={167}
              title="Student"
              description="There are 167 students with 12 fixed student in each class."
              color="#294078"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
