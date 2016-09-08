/**
 * Created by rtholmes on 2016-06-19.
 */
export default class Message {

    private msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    public echo(): string {
        if (this.msg !== null && this.msg.length > 0) {
            return this.msg + '...' + this.msg + '...' + this.msg;
        }
        return '';
    }

}
