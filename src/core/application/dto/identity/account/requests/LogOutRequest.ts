export class LogOutRequest{
    forceEndOtherSessions: boolean = false;
    constructor(
        forceEndOtherSessions: boolean,
    ) {
        this.forceEndOtherSessions = forceEndOtherSessions;
    }
}
