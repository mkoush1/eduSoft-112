const bcrypt = require('bcryptjs');

// Test the password hash that's in our mock data
async function testPasswordHash() {
  const storedHash = '$2a$10$CwTycUXWue0Thq9StjUM0uQxTmrYVpPqnTW.rV.0TJP1plGrVw7JO';
  const testPassword = 'password';
  
  console.log('Testing password hash...');
  
  try {
    const isMatch = await bcrypt.compare(testPassword, storedHash);
    console.log(`Password match result: ${isMatch}`);
    
    // Generate a new hash for the same password to verify
    const newHash = await bcrypt.hash(testPassword, 10);
    console.log(`New hash generated: ${newHash}`);
    
    const isMatchWithNewHash = await bcrypt.compare(testPassword, newHash);
    console.log(`New hash match result: ${isMatchWithNewHash}`);
    
  } catch (error) {
    console.error('Error testing password hash:', error);
  }
}

// Run the test
testPasswordHash(); 