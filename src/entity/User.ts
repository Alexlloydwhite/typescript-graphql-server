import { Entity, PrimaryColumn, Column, BeforeInsert } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class User {
  @PrimaryColumn("uuid") id: string;

  @Column("varchar", { length: 255 }) email: string;

  @Column("text") password: string;

  @BeforeInsert()
  addId() {
    this.id = uuid();
  }
}
