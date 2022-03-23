import { Entity, Column, CreateDateColumn, PrimaryColumn, Index } from 'typeorm';
import { NotificationChannelId } from './notificationChannel';

@Entity()
export class LoginState {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  @Index()
  createdDate: number;

  @Index()
  @Column({ nullable: true })
  userId: number;

  @Column({ type: 'simple-json' })
  data: LoginData;
}

export type LoginData = Partial<{
  redirectUrl: string;

  channelId?: NotificationChannelId;
  externalId?: string;
}>;
