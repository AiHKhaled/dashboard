import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "30rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PaymentForm() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [data, setData] = React.useState([]);
  const [Goals, setGoals] = React.useState([]);
  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/customers/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Goals/")
      .then((res) => res.json())
      .then((Goals) => {
        setGoals(Goals);
      });
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Defining Goals and Subgoals
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <FormHelperText>choose Goal </FormHelperText>
            <Select
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                Goals
              </MenuItem>
              {Goals.map((element) => (
                <MenuItem value={element.id}>{element.name} </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="expDate"
            label="Add Another Goal"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <FormHelperText>choose Subgoals </FormHelperText>

            <Select
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              {data.map((element) => (
                <MenuItem value={element.id}>{element.name} </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="subg"
            label="subgoal"
            helperText="subgoal"
            fullWidth
            autoComplete="subgoal"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
