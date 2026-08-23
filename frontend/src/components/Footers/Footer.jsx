const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-center text-sm md:flex-row">
        <p>© {new Date().getFullYear()} RVSK APP. All rights reserved.</p>

        <p>
          Built with ❤️ by{" "}
          <a
            href="https://github.com/ShankarDutta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground font-medium transition-colors">
            Shankar Dutta
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
