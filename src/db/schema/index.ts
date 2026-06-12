import { pgTable, serial, text, integer, timestamp, decimal, boolean, primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// --- AUTH & USER SCHEMA ---

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  phone: text("phone"),
  address: text("address"),
  city: text("city"),
  postalCode: text("postal_code"),
  area: text("area"),
  age: integer("age"),
  totalSpend: decimal('total_spend', { precision: 10, scale: 2 }).default('0.00').notNull(),
  orderCount: integer('order_count').default(0).notNull(),
  topInterest: text('top_interest'),
  lastActive: timestamp('last_active').defaultNow(),
  loyaltyPoints: integer('loyalty_points').default(0).notNull(),
  isNewCustomer: boolean('is_new_customer').default(true).notNull(),
  bonusBalance: decimal('bonus_balance', { precision: 10, scale: 2 }).default('0.00').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// --- AUDIT & SECURITY SCHEMA ---

export const loginLogs = pgTable('login_logs', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  status: text('status').notNull(), 
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  createdAt: timestamp('created_at').defaultNow(),
});

// --- PROMOTION SCHEMA ---

export const coupons = pgTable('coupons', {
  id: serial('id').primaryKey(),
  code: text('code').notNull().unique(),
  discountPercent: integer('discount_percent').notNull(),
  isUsed: boolean('is_used').default(false).notNull(),
  userId: text('user_id').references(() => users.id),
  expiresAt: timestamp('expires_at'),
  createdAt: timestamp('created_at').defaultNow(),
});

// --- PRODUCT & STORE SCHEMA ---

export const menuItems = pgTable('menu_items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  category: text('category').notNull(),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const siteSettings = pgTable('site_settings', {
  id: serial('id').primaryKey(),
  allowPaypal: integer('allow_paypal').default(1),
  allowCreditCard: integer('allow_credit_card').default(1),
  allowAfterpay: integer('allow_afterpay').default(1),
  allowZip: integer('allow_zip').default(1),
  allowCash: integer('allow_cash').default(1),
  allowEftpos: integer('allow_eftpos').default(1),
  allowDelivery: integer('allow_delivery').default(1),
  deliveryFee: decimal('delivery_fee', { precision: 10, scale: 2 }).default('5.00'),
  resendKey: text('resend_key'),
  stripeKey: text('stripe_key'),
  paypalKey: text('paypal_key'),
  afterpayKey: text('afterpay_key'),
  zipKey: text('zip_key'),
  heroTitle: text('hero_title').default('The Art of Urban Harvest'),
  heroSubtitle: text('hero_subtitle').default('A private digital architecture for premium grocery, artisan hot foods, and curated neighborhood essentials.'),
  missionTitle: text('mission_title').default('Gourmet Engineering'),
  missionBody: text('mission_body').default("Every product is an interaction. Every meal is a protocol. We've redesigned the neighborhood store as a high-performance system for local life."),
  footerQuote: text('footer_quote').default('"Everything Else is Just Noise."'),
  footerCopy: text('footer_copy').default('Autonomous Retail Architecture'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// --- ORDER SCHEMA ---

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: text('user_id').references(() => users.id),
  customerName: text('customer_name').notNull(),
  email: text('email'),
  phone: text('phone'),
  status: text('status').default('pending').notNull(),
  paymentStatus: text('payment_status').default('unpaid').notNull(),
  paymentMethod: text('payment_method').notNull(),
  deliveryType: text('delivery_type').notNull(),
  address: text('address'),
  totalAmount: decimal('total_amount', { precision: 10, scale: 2 }).notNull(),
  discountApplied: decimal('discount_applied', { precision: 10, scale: 2 }).default('0.00'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id').references(() => orders.id).notNull(),
  menuItemId: integer('menu_item_id').references(() => menuItems.id).notNull(),
  quantity: integer('quantity').notNull(),
});

// --- RELATIONS ---

export const usersRelations = relations(users, ({ many }) => ({
  orders: many(orders),
}));

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, { fields: [orders.userId], references: [users.id] }),
  items: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, { fields: [orderItems.orderId], references: [orders.id] }),
  menuItem: one(menuItems, { fields: [orderItems.menuItemId], references: [menuItems.id] }),
}));
