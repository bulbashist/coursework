import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  clientId: number;

  @Column()
  status: number;

  @Column()
  time?: string;

  @OneToMany(() => ProductsToOrders, (pto) => pto.order, {
    eager: true,
    cascade: true,
  })
  public products: ProductsToOrders[];

  @Column({ generated: 'uuid' })
  ticket: number;
}

@Entity()
export class ProductsToOrders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public orderId: number;

  @Column()
  public productId: number;

  @Column({ nullable: true })
  public count: number;

  @ManyToOne(() => Order, (order) => order.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'orderId', referencedColumnName: 'id' })
  public order: Order;

  @ManyToOne(() => Product, (product) => product.productsToOrders, {
    cascade: ['insert'],
    eager: true,
  })
  // @JoinColumn({ name: 'product_id' })
  public product: Product;
}
