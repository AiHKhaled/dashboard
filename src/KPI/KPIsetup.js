import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Accord = (props) => {
  const [istrue, setIstrue] = React.useState(false);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label="Expand"
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        <FormControlLabel
          aria-label="Acknowledge"
          onClick={(event) => event.stopPropagation()}
          onFocus={(event) => event.stopPropagation()}
          control={
            <Checkbox
              checked={istrue}
              onChange={(e) => {
                console.log(e.target.checked);
                /* setIstrue(e.target.checked);
                sdata.push(checked); */
              }}
            />
          }
          label={props.element.name}
        />
      </AccordionSummary>

      <AccordionDetails>
        <Typography color="textSecondary">
          {props.element.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default function KPIsetup() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [sdata, setSdata] = React.useState([]);

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/KPIs/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className={classes.root}>
      {data.map((element) => (
        <Accord name={sdata} element={element} />
      ))}
    </div>
  );
}
