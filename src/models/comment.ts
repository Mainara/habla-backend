import { Entity, BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn } from "typeorm";
import { Profile } from "./profile";
import { Post } from "./post";
import { ApiModelProperty, ApiModel } from "swagger-express-ts";

@ApiModel({
  name: "Comment"
})
@Entity()
export class Comment extends BaseEntity {
    @ApiModelProperty({ required: true })
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiModelProperty({ required: true })
    @Column({ nullable: false })
    body: string;

    @ManyToOne(type => Profile)
    owner: Profile;

    @ManyToOne(type => Post)
    post: Post;

    @ApiModelProperty({ required: false, type: "string" })
    @CreateDateColumn({ type: "timestamp with time zone" })
    createdAt: Date;

    @ApiModelProperty({ required: false, type: "string" })
    @UpdateDateColumn({ type: "timestamp with time zone" })
    updatedAt: Date;
}