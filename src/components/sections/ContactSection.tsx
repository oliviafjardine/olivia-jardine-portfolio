export default function ContactSection({ isHome = false }: { isHome?: boolean }) {
  return (
    <div className={isHome ? "section-outer" : "section-outer section-outer--page"}>
      <div className="page-box">
        <h2 className="section-title">Contact</h2>
      </div>
    </div>
  );
}