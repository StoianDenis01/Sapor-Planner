function Navbar() {
  return (
    <div style={styles.navbar}>
      
      <div style={styles.left}>
        <h2 style={styles.logo}>Sapor Events</h2>
        <span style={styles.subtitle}>PLANIFICATOR MESE</span>
      </div>

      <div style={styles.right}>
        <button style={styles.button}> Acasă</button>
        <button style={styles.button}> Printează</button>
        <button style={styles.button}> Listă</button>
        <button style={styles.button}> Sală</button>

        <div style={styles.counter}>Invitați </div>
        <div style={styles.counter}>Mese </div>
      </div>

    </div>
  )
}

const styles = {
    navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#2c2c2c",
    color: "white",
    padding: "10px 25px",
    width: "100%",
    boxSizing: "border-box"
    },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  logo: {
    margin: 0,
    fontWeight: "600"
  },

  subtitle: {
    color: "#aaa",
    fontSize: "14px"
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  button: {
    background: "#444",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  counter: {
    background: "#444",
    padding: "6px 12px",
    borderRadius: "6px"
  }
}

export default Navbar