
export type Project_Type = {
  id: string,
  name: string,
  description: string,
  paddock_user_creator: {
    first_name: string,
    last_name: string
  }
}

export type Project_All_Type = {
  message:string,
  projects: Project_Type[]
}