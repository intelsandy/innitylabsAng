export class SessionModel {
    public SessionTitle: string;
    public Duedate : string;
    public Status : string;
    public presenter : string;
    public extPresenter : string;
    public sessionStartTime : string;
    public sessionEndTime : string;
    public internalParticipants: object;
    public externalParticipants: object;
    public attachment:string
    public Priority : string;
    public Remarks :string

    // constructor(SessionTitle: string,
    //     Duedate : string,
    //     Priority : string,
    //     Status : string)
    //     {
    //     this.SessionTitle = SessionTitle;
    //     this.Duedate = Duedate;
    //     this.Priority = Priority;
    //     this.Status = Status;
    }
}