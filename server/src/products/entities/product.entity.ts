// import { ProductsToOrders } from 'src/orders/entities/order.entity';
import { ProductsToOrders } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  category: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  compound: string;

  @Column({ nullable: true })
  media: string;

  @OneToMany(() => ProductsToOrders, (pto) => pto.product, {
    // eager: true,
    cascade: true,
  })
  public productsToOrders: ProductsToOrders[];
}
