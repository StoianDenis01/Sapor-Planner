function InvitatiPanel() {
  return (
    <div style={styles.panel}>
      <h2 style={styles.title}>Lista Invitați</h2>

      <input
        type="text #000000"
        placeholder="Nume invitat"
        style={styles.input}
      />

      <select style={styles.select}>
        <option>Menu Normal</option>
        <option>Vegetarian</option>
        <option>Vegan</option>
        <option>Fără Gluten</option>
      </select>

      <button style={styles.addBtn}>
        + Adaugă Invitat
      </button>

      <button style={styles.importBtn}>
        Importă din fișier
      </button>

      <div style={styles.list}>
        <div style={styles.guest}>
          Stoian Denis
          <span style={styles.badge}>Menu Normal</span>
        </div>

        <div style={styles.guest}>
          Larisa
          <span style={styles.badge}>Vegetarian</span>
        </div>

        <div style={styles.guest}>
          Alex
          <span style={styles.badge}>Menu Normal</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  panel: {
    width: "300px",
    background: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    color : "#000000"
  },

  title: {
    marginBottom: "15px",
    color: "#000000",
  },

  input: {
    width: "94%",
    padding: "8px",
    marginBottom: "10px",
    color: "#000000",
    border: "1px solid #e0d5cc",
    background: "#ffffff"
  },

  select: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    color : "#000000",
    border: "1px solid #e0d5cc",
    background: "#ffffff"
  },

  addBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    background: "#ffffff",
    border: "1px solid #e0d5cc",
    cursor: "pointer",
    color: "#000000"
  },

  importBtn: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    background: "#ffffff",
    border: "1px solid #e0d5cc",
    cursor: "pointer",
    color : "#000000"
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  guest: {
    background: "white",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #e0d5cc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  badge: {
    background: "#e0d5cc",
    padding: "3px 8px",
    borderRadius: "10px",
    fontSize: "12px"
  }
};

export default InvitatiPanel;