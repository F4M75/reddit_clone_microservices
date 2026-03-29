import { IsString } from "class-validator";
import { CreateSubredditDto } from "./create-subreddit.dto";

export class UpdateSubredditDto extends CreateSubredditDto {
  @IsString()
  id: string;
}
