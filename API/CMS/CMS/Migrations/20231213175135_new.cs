using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CMS.Migrations
{
    public partial class @new : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "medicines",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "medicines",
                newName: "medicine_Type");

            migrationBuilder.AddColumn<string>(
                name: "medicine_Description",
                table: "medicines",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "medicine_Name",
                table: "medicines",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "medicine_Price",
                table: "medicines",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "medicine_Description",
                table: "medicines");

            migrationBuilder.DropColumn(
                name: "medicine_Name",
                table: "medicines");

            migrationBuilder.DropColumn(
                name: "medicine_Price",
                table: "medicines");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "medicines",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "medicine_Type",
                table: "medicines",
                newName: "name");
        }
    }
}
