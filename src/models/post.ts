import { Column, Entity, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Channel } from "./channel";
import { Profile } from "./profile";
import { Comment } from "./comment";

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ nullable: false })
    body: string;

    // @Column({ nullable: false, type: "point" })
    // location: { x: number, y: number };

    @ManyToOne(type => Channel, channel => channel.posts, { onDelete: "SET NULL" })
    channel: Channel;

    @ManyToOne(type => Profile, profile => profile.posts)
    owner: Profile;

    @OneToMany(type => Comment, comment => comment.post)
    comments: Comment[];

    @Column({ nullable: true })
    ownerUid: string;

    @Column({ nullable: true })
    channelId: number;

    @CreateDateColumn({ type: "timestamp with time zone"})
    createdAt: Date;

    @CreateDateColumn({ type: "timestamp with time zone"})
    updatedAt: Date;
}