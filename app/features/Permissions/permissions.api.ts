async function getPermissions(): Promise<Object> {
    await new Promise(r => setTimeout(r, 1000));

}
export { getPermissions }