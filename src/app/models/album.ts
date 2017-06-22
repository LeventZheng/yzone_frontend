import { Comment } from './comment';
import { Photo } from './photo';
import { Video } from './video';
import { Music } from './music';

export class Album{
    albumId: number;
    albumTitle?: String;
    resourceType?: number;
    music?: Music;
    likes?: Music;
    video?: Video;
    photoList?: Photo[] = new Array<Photo>();
    commentList?: Comment[] = new Array<Comment>();
    updatDate?: Date;
    creatDate?: Date;
}
