export class Task {
  public constructor(
    public taskId: string,
    public title: string,
    public dueDate: string,
    public description: string,
    public priority: string,
    public assignedTo: string,
    public assignedDate: string,
    public comments: string,
    public status: string
  ) {}
}
