using Microsoft.AspNetCore.Identity;

public class ApplicationUser : IdentityUser
{
    // You can add custom fields if needed
    public string? FullName { get; set; }
}
