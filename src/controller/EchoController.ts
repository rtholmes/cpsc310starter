/**
 * Created by rtholmes on 2016-06-19.
 */

import Log from "../Util";
import Message from "../model/Message";

export default class EchoController {

    public echo(value:string):string {
        Log.trace('EchoController::echo( ' + value + ' )');
        let msg = new Message(value);
        return msg.echo();
    }
}
