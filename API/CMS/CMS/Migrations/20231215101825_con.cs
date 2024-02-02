using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CMS.Migrations
{
    public partial class con : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_contacts_contacts_contactsid",
                table: "contacts");

            migrationBuilder.DropIndex(
                name: "IX_contacts_contactsid",
                table: "contacts");

            migrationBuilder.DropColumn(
                name: "contactsid",
                table: "contacts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "contactsid",
                table: "contacts",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_contacts_contactsid",
                table: "contacts",
                column: "contactsid");

            migrationBuilder.AddForeignKey(
                name: "FK_contacts_contacts_contactsid",
                table: "contacts",
                column: "contactsid",
                principalTable: "contacts",
                principalColumn: "id");
        }
    }
}
