import { Switch, Route, Redirect } from "react-router-dom";
import StreamCreate from "./component/StreamCreate";
import StreamDelete from "./component/StreamDelete";
import StreamEdit from "./component/StreamEdit";
import StreamList from "./component/StreamList";
import StreamShow from "./component/StreamShow";

const Rout = () => {
  return (
    <Switch>
      <Route exact path="/" component={StreamList} />
      <Route exact path="/new" component={StreamCreate} />
      <Route exact path="/edit" component={StreamEdit} />
      <Route exact path="/delete" component={StreamDelete} />
      <Route exact path="/show" component={StreamShow} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Rout;
