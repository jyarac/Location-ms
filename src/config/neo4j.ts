import neo4j from 'neo4j-driver'


const driver = neo4j.driver(
    <string>process.env.NEO4J_URI, // (1)
    neo4j.auth.basic(<string>process.env.NEO4J_USERNAME, <string>process.env.NEO4J_PASSWORD), // (2)
    { disableLosslessIntegers: true } // (3)

    )
    async function neo4jConnect(): Promise<void> {
        await driver.getServerInfo()
        console.log("Neo4j connected!")
    }
    export default neo4jConnect;
