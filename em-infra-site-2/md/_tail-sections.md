
## Operation   

Once all installation and configurations are complete, the operation of the backup solution will be scheduled as per your instruction. When an operation is triggers against a schedule the steps will run as follows.

1.  **Initialize and test that all components are operational.**

2.  **Determine the delta.**

    * *The delta is that part of the backup that has not yet been backed up.*

3. **Establish connection to the cloud.**

4. **Confirm delta against cloud backups.**

    * *This is to ensure that the delta's start is the current backups end.*

5. **Encrypt the delta with the private encryption key in preparation for transport.**

6. **Transport.**

    * In this step all packets are transported over [https](#https) to the cloud storage, packets that are lost along the way are retransmitted. Any detected interception attempts will result in connection terminations that will notify all relevant parties of nefarious activity which will trigger an immediate investigation.

7. **Complete transport decrypt and save in cloud storage**

    * Confirms that the local and cloud backups are in sync. Here the client can opt to be notified of each completion with details of the backup operation.

8.  **Listen for next operation.**

> **CONSIDERATION**: For added security you have to option to not decrypt saved backups, this means that no-one, and by this I only mean myself only, can view or tamper with your data. If a troll manages to break into the cloud penetrate all the security layers, and get the date out of the cloud before being caught, the data would be useless without the private security key to decrypt the data into a coherent format. Although the risk here is that if the private key is lost somehow, all backups would be rendered useless.

## Security detail {id="security-detail"}

## Encryption

## Life Cycle

## Compliance 

### Additional Resources

# Glossary 
| Acronym / Tech Jargon | description |
|-----------------------|-------------|
| http {id="http"}      |             |
| https {id="http"}     |             |
| Delta {id="delta"}    |             |
| Credentails           |             |
