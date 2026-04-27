import { IsEnum, IsOptional, IsString } from "class-validator";
import { CreateSubredditDto } from "./create-subreddit.dto";
import { SubredditType } from "../../enum";

export class UpdateSubredditDto {
  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  topic?: string;

  @IsEnum(SubredditType)
  @IsOptional()
  type?: SubredditType;
}
