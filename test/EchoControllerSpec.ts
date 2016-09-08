/**
 * Created by rtholmes on 2016-10-31.
 */

import EchoController from "../src/controller/EchoController";
import Log from "../src/Util";

import {expect} from 'chai';

describe("EchoController", function () {

    beforeEach(function () {
    });

    afterEach(function () {
    });

    it("Should be able to echo", function () {
        let txt = 'hello?';
        let ret = new EchoController().echo(txt);
        Log.test('In: ' + txt + ', out: ' + ret);
        expect(ret).not.to.be.equal(null);
        expect(ret).to.equal(txt + '...' + txt);
    });

    it("Should be able to handle null", function () {
        let txt: string = null;
        let ret = new EchoController().echo(txt);
        Log.test('In: ' + txt + ', out: ' + ret);
        expect(ret).not.to.be.equal(null);
        expect(ret).to.equal('');
    });

    it("Should be able to handle silence", function () {
        let txt = '';
        let ret = new EchoController().echo(txt);
        Log.test('In: ' + txt + ', out: ' + ret);
        expect(ret).not.to.be.equal(null);
        expect(ret).to.equal('');
    });
});
