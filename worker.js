async function checkPage(env) {
    // Original logic of checkPage remains unchanged

    // Remove distributed lock logic
    // const lock = await KV_LOCK_KEY;
    // if (lock) return;  // Skip execution when locked

    // write KV_LOCK_KEY with expirationTtl
    // await KV_LOCK_KEY.write(expirationTtl);

    // The rest of the logic continues here...

    // Finally block to delete KV_LOCK_KEY
    // await KV_LOCK_KEY.delete();
}