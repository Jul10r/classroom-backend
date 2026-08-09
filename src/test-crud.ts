import { eq } from 'drizzle-orm';
import { db } from './db/index.js';
import { user } from './db/schema/index.js';

async function main() {
  try {
    console.log('Performing CRUD operations...');

    // CREATE: Insert a new user
    const [newUser] = await db
      .insert(user)
      .values({
        id: 'admin-user-1',
        name: 'Admin User',
        email: 'admin@example.com',
        emailVerified: false,
      })
      .returning();

    if (!newUser) {
      throw new Error('Failed to create user');
    }

    console.log('✅ CREATE: New user created:', newUser);

    // READ: Select the user
    const foundUser = await db
      .select()
      .from(user)
      .where(eq(user.id, newUser.id));
    console.log('✅ READ: Found user:', foundUser[0]);

    // UPDATE: Change the user's name
    const [updatedUser] = await db
      .update(user)
      .set({ name: 'Super Admin' })
      .where(eq(user.id, newUser.id))
      .returning();

    if (!updatedUser) {
      throw new Error('Failed to update user');
    }

    console.log('✅ UPDATE: User updated:', updatedUser);

    // DELETE: Remove the user
    await db.delete(user).where(eq(user.id, newUser.id));
    console.log('✅ DELETE: User deleted.');

    console.log('\nCRUD operations completed successfully.');
  } catch (error) {
    console.error('❌ Error performing CRUD operations:', error);
    process.exit(1);
  }
}

main();
