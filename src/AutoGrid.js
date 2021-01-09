import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  btnContainer: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    marginLeft: ".5em",
  },
}));

export default function AutoGrid(props) {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div>
              {props.clue.map((item) => (
                <div key={item.id}>
                  <h1>{item.category.title}</h1>
                  <p>Question: {item.question}</p>
                </div>
              ))}
              {props.answers.length > 0 &&
                props.answers.map((item) => <p key={item.id}>{item.answer}</p>)}
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => props.onAnswerClick(e)}
              >
                Answer
              </Button>
            </div>
          </Paper>
          <div className={classes.btnContainer}>
            <p>Next</p>
            <Fab className={classes.fab} color="primary" size="small">
              <ArrowForwardIcon onClick={(e) => props.onNewQuestionClick(e)}>
                New Question
              </ArrowForwardIcon>
            </Fab>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}