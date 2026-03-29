import { IsEnum, IsString } from "class-validator";
import { SubredditType } from "../../enum";

export class CreateSubredditDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  topic: string;

  @IsEnum(SubredditType)
  type: SubredditType;
}
